import { useEffect, useState } from 'react';
import { capitalise } from '../utils/capitalise';
import { getTopics } from './api';
import { Link, navigate } from '@reach/router';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';

const Nav = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [topics, setTopics] = useState();

  useEffect(() => {
    getTopics().then((res) => {
      setTopics(res);
      setIsLoading(false);
    });
  }, []);

  const onChange = ({ target }) => {
    navigate(`/topics/${target.value}`);
  };

  if (isLoading) return <p>Loading...</p>;
  return (
    <nav>
      {topics.map((topic) => {
        return (
          <Link className="nav" key={topic.slug} to={`topics/${topic.slug}`}>
            <li>{capitalise(topic.slug)}</li>
          </Link>
        );
      })}
      <FormControl className="nav-topic-formControl">
        <NativeSelect
          className="nav-topic-selectEmpty"
          name="topic"
          value={''}
          onChange={onChange}
          inputProps={{ 'aria-label': 'age' }}
        >
          <option value="" disabled>
            Topic
          </option>
          {topics.map((topic) => {
            return (
              <option key={topic.slug} value={topic.slug}>
                {capitalise(topic.slug)}
              </option>
            );
          })}
        </NativeSelect>
      </FormControl>
    </nav>
  );
};

export default Nav;
