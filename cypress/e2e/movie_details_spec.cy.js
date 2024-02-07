import { allMoviesData, individualMovieData, individualMovieVideosData } from "../../src/MockData";

describe('All movies view', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
    cy.intercept("GET", "https://rancid-tomatillos.herokuapp.com/api/v2/movies", {
      statusCode:   200,
      body: allMoviesData,
    });
   
    cy.intercept("GET", "https://rancid-tomatillos.herokuapp.com/api/v2/movies/724495", {
      statusCode:   200,
      body: individualMovieData,
    });
   
    cy.intercept("GET", "https://rancid-tomatillos.herokuapp.com/api/v2/movies/724495/videos", {
      statusCode:   200,
      body: individualMovieVideosData,
    });
  });
  it('should display movie details when a user selects a movie', () => {
    
    cy.get('[data-id="724495"]').click();
    cy.get('div.individual-movie').contains('The Woman King');
    cy.get('div.individual-movie').contains('135 minutes')
  });
});