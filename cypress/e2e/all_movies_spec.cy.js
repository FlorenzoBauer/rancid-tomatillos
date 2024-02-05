import { movieData } from "../../src/MockData"

describe('All movies view', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
    cy.intercept("GET", "https://rancid-tomatillos.herokuapp.com/api/v2/movies", {
      statusCode: 201,
      body: movieData,
    });
  })
  it('should visit page and see the main title', () => {
    cy.get('h1').contains('Rancid Tomatillos')
  
  });
  it('should display a collection of movies', () => {
    cy.get('div.movies-container').contains('Money Plane');

  }); 
  it('should go to movie details, when a user clicks on a movie', () =>{
    cy.get('[data-id="694919"]').click()
    .get('h2').contains('Money Plane')
     
  })
})