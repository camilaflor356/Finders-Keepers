# Finders-Keepers

My idea is to make a website where you can search through a database of restaurants throughout the world. I get really interested in the cuisines and cultural differences in other countries and I thought this would be a cool way of seeing that information.

# Objectives

* Some front-end so that the user can choose what sections they want to search through (cuisine, currency, country etc.) and see the information on their screen. Vote for restaurants that are/seem good.
* For backend I use a database of restaurant information. Then I would need to create a way for users to SEARCH through the database through the different categories. 
* I need to learn how to display multiple rows from a database at once.
* STRETCH GOAL if I have time, I will find a way to allow users to filter with more than one category at the same time.
* I considered using a database about one sole restaurant and it's menu but I found it restricting.

# Submission

Credit for database: https://www.kaggle.com/datasets/shrutimehta/zomato-restaurants-data?resource=download&authuser=0

Filter by cuisine
localhost:4000/cuisines/:cuisines (GET endpoint)-- put in a cuisine to find restaurants that serve it.

Filter by price rating
localhost:4000/prices/:prices (GET endpoint)-- put in a price range (1-4, 4 being most expensive) to find restaurants within it.

Filter by ratings
localhost:4000/ratings/:ratings (GET endpoint)-- put in a rating (0-5, 5 being highest rating) to find restaurants with that rating.

Other endpoints (not made)
localhost:4000/country/:country (GET endpoint)-- put in a country to find restaurants in that country.

localhost:4000/votes/:id (GET endpoint)-- enter id of a restaurant to find the votes of a restaurant.

localhost:4000/voting (POST endpoint) -- vote for a restaurant.