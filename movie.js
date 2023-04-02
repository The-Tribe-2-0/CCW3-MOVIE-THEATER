// Fetch data from the JSON server
fetch('http://localhost:3000/films')
  .then(response => response.json())
  .then(data => {
    const container = document.querySelector('.container');

    // Loop through the data and create a card for each movie
    data.forEach(movie => {
      const card = document.createElement('div');
      card.classList.add('card');

      const image = document.createElement('img');
      image.classList.add('poster');
      image.src = movie.poster;
      image.alt = movie.title;
      card.appendChild(image);

      const cardBody = document.createElement('div');
      cardBody.classList.add('card-body');

      const title = document.createElement('h5');
      title.classList.add('title');
      title.textContent = movie.title;
      cardBody.appendChild(title);

      const description = document.createElement('p');
      description.classList.add('description');
      description.textContent = movie.description;
      cardBody.appendChild(description);

      const showtime = document.createElement('p');
      showtime.classList.add('showtime');
      showtime.textContent = `Showtime: ${movie.showtime}`;
      cardBody.appendChild(showtime);

      const tickets = document.createElement('p');
      tickets.classList.add('tickets');
      tickets.textContent = `Tickets Available: ${movie.capacity - movie.tickets_sold}`;
      cardBody.appendChild(tickets);

      const button = document.createElement('a');
      button.classList.add('btn');
      button.href = movie.link;
      button.textContent = 'Book Now';
      cardBody.appendChild(button);

      card.appendChild(cardBody);

      container.appendChild(card);
    });
  })
  .catch(error => console.log(error));
