import React from 'react'

function Artists() {

    const artists = [
        {
            "id": 1,
            "name": "Kevin",
            "level": "pro"
        },
        {
            "id": 2,
            "name": "Rick",
            "level": "semi-pro"
        },
        {
            "id": 3,
            "name": "Akama",
            "level": "max-pro"
        },
        {
            "id": 4,
            "name": "Lunalo",
            "level": "most-pro"
        }
];
const listOfArtists = artists.map((artist) => {
    return (
        <li key={artist.id} >{artist.name} {artist.level} </li>
    );
});

  return (
    <div>
        <h2>Top Artists</h2>
        <ol>
            {listOfArtists}
        </ol>

    </div>
  )
}

export default Artists