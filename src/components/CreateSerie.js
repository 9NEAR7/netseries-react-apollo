import React, { useState } from 'react';
import { useMutation, gql } from '@apollo/client';

const CREATE_SERIE_MUTATION = gql`
  mutation PostMutation(
    $name: String!
    $description: String!
    $year: String!
    $seasons: String!
    $url: String!
  ) {
    createSerie(name: $name, description: $description, year: $year, seasons: $seasons, url: $url) {
      id
      name
      description
      year
      seasons
      url
      
    }
  }
`;

const CreateSerie = () => {
  const [formState, setFormState] = useState({
    name: '',
    description: '',
    year: '',
    seasons: '',
    url: ''
  });

  const [createSerie] = useMutation(CREATE_SERIE_MUTATION, {
    variables: {
      name: formState.name,
      description: formState.description,
      year: formState.year,
      seasons: formState.seasons,
      url: formState.url
    }
  });

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          createSerie();
        }}
      >
        <div className="flex flex-column mt3">
          <input
            className="mb2"
            value={formState.name}
            onChange={(e) =>
              setFormState({
                ...formState,
                name: e.target.value
              })
            }
            type="text"
            placeholder="Nombre de la serie"
          />
          <input
            className="mb2"
            value={formState.description}
            onChange={(e) =>
              setFormState({
                ...formState,
                description: e.target.value
              })
            }
            type="text"
            placeholder="Descrición de la serie"
          />
          <input
            className="mb2"
            value={formState.year}
            onChange={(e) =>
              setFormState({
                ...formState,
                year: e.target.value
              })
            }
            type="text"
            placeholder="Año de lanzamiento"
          />
          <input
            className="mb2"
            value={formState.seasons}
            onChange={(e) =>
              setFormState({
                ...formState,
                seasons: e.target.value
              })
            }
            type="text"
            placeholder="Temporadas"
          />
          <input
            className="mb2"
            value={formState.url}
            onChange={(e) =>
              setFormState({
                ...formState,
                url: e.target.value
              })
            }
            type="text"
            placeholder="URL imagen"
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CreateSerie;