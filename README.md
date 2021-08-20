# NE CAMPGROUND REVIEWS

NE Campground Reviews is a campground review app that provides information and reviews for campground around the Northeast. Devise was used to handle user authentication and authorization. Currently the only role used is "admin" which gives authorized users the ability to create new campgrounds, update existing campgrounds, and add/edit camper modifications.

This application also uses ActiveRecord. Images are stored in AWS S3 Cloud Storage.

[See the deployed application here](https://necampgroundreviews.com/)

[![Codeship Status for madducks42/ne-campground-reviews-v2](https://app.codeship.com/projects/3e51f287-721b-4380-881a-0d056604d231/status?branch=main)](https://app.codeship.com/projects/450648)

## Built with
- [Ruby on Rails](https://guides.rubyonrails.org/v5.2/)
- [React.js](https://reactjs.org/docs/getting-started.html)
- [PostgreSQL](https://www.postgresql.org/docs/13/index.html)

## Run Locally
The setup steps expect the following tools/versions:
- Ruby 2.7.2
- Rails 6.1.0
- PostgreSQL 13.1

###### Clone the Repo
```
git clone 
```
###### Install Dependencies
```
yarn install 
```
```
bundle install 
```

###### Create and seed the database
```
bundle exec rake db: migrate
```
```
bundle exec rake db: seed
```

###### Run the test suite
```
bundle exec rspec
```
###### Start the Rails server and webpack-dev-server
```
bundle exec rails s
yarn run start
```

###### The application can be accessed locally at <http://localhost:3000>