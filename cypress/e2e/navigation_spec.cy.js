import { allMoviesData, individualMovieData, individualMovieVideosData } from "../../src/MockData";

describe('All movies view', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
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

  it('should be able to switch urls when a user clicks a movie card', () => {
    cy.get('[data-id="724495"]').click();
    cy.url().should('include', '/724495')
  });
  it('should navigate back to main movies page when user selects browser back button', () => {
    cy.visit('http://localhost:3000/724495')
    cy.go('back');
    cy.url().should('eq','http://localhost:3000/')
  });
  it('should navigate forward to movie details page when user selects browser forward button', () =>{
    cy.visit('http://localhost:3000/724495')
    cy.go('back');
    cy.url().should('eq','http://localhost:3000/')
    cy.go('forward');
    cy.url().should('eq', 'http://localhost:3000/724495')
  });
});

describe('navigation sad paths', () => {
  it('should display an error message when a user goes to an incorrect url', () => {
    cy.visit('http://localhost:3000/')
    cy.visit('http://localhost:3000/123456')
    cy.contains('h1', '404 - Page Not Found')
  });

});