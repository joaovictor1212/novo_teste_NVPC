import React, { useEffect, useState } from 'react';
import RequestService from '../../services/RequestService';

import ReposListRow from '../ReposListRow';

function ReposList({ filterText }) {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    (async () => {
      const repos = await RequestService({
        url: 'https://api.github.com/users/joaovictor1212/repos',
      });

      if (repos) {
        setRepos(repos);
      }

      if (filterText) {
        const reposFiltered = repos.filter((repo) =>
          repo.name.includes(filterText)
        );
        setRepos(reposFiltered);
      }
    })();
  }, [filterText]);

  return (
    <div>
      <ul>
        {repos.map((repo) => {
          return (
            <li>
              <ReposListRow repo={repo} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ReposList;
