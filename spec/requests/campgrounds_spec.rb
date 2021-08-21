# require 'rails_helper'
# require 'pry'

# RSpec.describe "Campgrounds", type: :request do
  
#   describe "GET /campgrounds" do
#     it "gets all campgrounds in DB" do
#       get api_v1_campgrounds_path
#       expect(response).to have_http_status(200)
#     end
#   end

#   describe "SHOW /campgrounds/1" do
#     it "shows a specfic campground" do
#       get api_v1_campgrounds_path
#       expect(response).to have_http_status(200)
#     end
#   end

#   describe "CREATE /campgrounds/new" do
#     it 'create campground with valid attributes' do
#       campground_params = { campground: {
#         name: 'Forked Lake Campground',
#         caption: 'Rustic and remote campground. Most sites are waterfront.',
#         review: "Forked Lake Campground is a state run campground located in the Adirondacks of upstate New York. It’s about a five hour drive from Boston. Unlike most of the places we camp, this isn’t a state park but rather a state run campground. This means there aren’t a lot of trails that start right at, or close by, the campground. But there are a lot of lakes, rivers, and state parks in this area so the campground provides a great home-base to venture forth. Or you can hang out all day the campsite because the lake is fantastic.",
#         location: 'New York',
#         zip_code: '12847',
#         campground_link: 'https://www.dec.ny.gov/outdoor/24467.html',
#         dogs_allowed: true,
#         electric_hookups: false,
#         water_hookups: false,
#         potable_water: true,
#         dump_station: false,
#         bathrooms: true,
#         showers: false,
#         image_name: "bear-brook",
#         image_num: 7
#       }}
#       post '/api/v1/campgrounds', :params => campground_params.to_json, :headers => { "Content-Type": "application/json" }
#       json = JSON.parse(response.body)
#       expect(response).to have_http_status(:success)
#     end
#   end

#   describe "CREATE /campgrounds/new" do
#     it 'create campground with valid attributes' do
#       campground_params = { campground: {
#         name: 'Forked Lake Campground',
#         caption: 'Rustic and remote campground. Most sites are waterfront.',
#         review: "Forked Lake Campground is a state run campground located in the Adirondacks of upstate New York. It’s about a five hour drive from Boston. Unlike most of the places we camp, this isn’t a state park but rather a state run campground. This means there aren’t a lot of trails that start right at, or close by, the campground. But there are a lot of lakes, rivers, and state parks in this area so the campground provides a great home-base to venture forth. Or you can hang out all day the campsite because the lake is fantastic.",
#         location: 'New York',
#         zip_code: '12847',
#         campground_link: 'https://www.dec.ny.gov/outdoor/24467.html',
#         dogs_allowed: true,
#         electric_hookups: false,
#         water_hookups: false,
#         potable_water: true,
#         dump_station: false,
#         bathrooms: true,
#         showers: false,
#         image_name: "bear-brook",
#         image_num: 7
#       }}

#       new_campground_params = { campground: {
#         name: 'Forked Lake Campground',
#         caption: 'Rustic and remote campground. Most sites are waterfront.',
#         review: "Forked Lake Campground is a state run campground located in the Adirondacks of upstate New York. It’s about a five hour drive from Boston. Unlike most of the places we camp, this isn’t a state park but rather a state run campground. This means there aren’t a lot of trails that start right at, or close by, the campground. But there are a lot of lakes, rivers, and state parks in this area so the campground provides a great home-base to venture forth. Or you can hang out all day the campsite because the lake is fantastic.",
#         location: 'New York',
#         zip_code: '12847',
#         campground_link: 'https://www.dec.ny.gov/outdoor/24467.html',
#         dogs_allowed: true,
#         electric_hookups: false,
#         water_hookups: false,
#         potable_water: true,
#         dump_station: false,
#         bathrooms: true,
#         showers: false,
#         image_name: "bear-brook",
#         image_num: 7
#       }}
#       # binding.pry
#       campground = Campground.create(campground_params[:campground])
#       patch "/api/v1/campgrounds/#{campground.id}", :params => new_campground_params.to_json, :headers => headers
#       json = JSON.parse(response.body)
#       expect(json["campground"]).to include("description" => "Updated the description to test")
#     end
#   end

# end
