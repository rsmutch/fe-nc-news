import likeImg from '../images/like.svg';
import dislikeImg from '../images/dislike.svg';
import { useState } from 'react';
import { patchArticleVotes, patchCommentVotes } from './api';

const Voter = ({ article_id, votes, comment_id }) => {
  const [hasError, setHasError] = useState(false);
  const [errorMessage, setErrorMessage] = useState({});
  const [hasVoted, setHasVoted] = useState(false);
  const [voteCount, setVoteCount] = useState(votes);

  const handleVotes = (vote) => {
    if (!hasVoted) {
      setHasVoted(true);
      setVoteCount(voteCount + vote);
      if (article_id) {
        patchArticleVotes(article_id, vote).catch((err) => {
          const {
            response: { status, statusText }
          } = err;
          setHasError(true);
          setErrorMessage({ status, statusText });
          setHasVoted(false);
          setVoteCount(voteCount - vote);
        });
      } else if (comment_id) {
        patchCommentVotes(comment_id, vote).catch((err) => {
          const {
            response: { status, statusText }
          } = err;
          setHasError(true);
          setErrorMessage({ status, statusText });
          setHasVoted(false);
          setVoteCount(voteCount - vote);
        });
      }
    }
  };
  if (hasError) return <p>{errorMessage}</p>;
  return (
    <div className="voter">
      <div className="voter-like-buttons">
        <img
          src={likeImg}
          alt="like icon"
          onClick={() => handleVotes(1)}
          disabled={hasVoted}
        />
        <img
          src={dislikeImg}
          alt="dislike icon"
          value="-1"
          onClick={() => handleVotes(-1)}
          disabled={hasVoted}
        />
      </div>
      <p className="votes">{voteCount}</p>
    </div>
  );
};

export default Voter;
