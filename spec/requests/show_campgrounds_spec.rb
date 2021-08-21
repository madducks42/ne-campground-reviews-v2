require 'rails_helper'
require 'pry'

RSpec.describe "Campgrounds", type: :request do
  
  describe "SHOW /campgrounds/1" do
    it "shows a specfic campground" do
      get api_v1_campgrounds_path
      expect(response).to have_http_status(200)
    end

    it 'should return the campground names, descriptions, locations and amentities from the database' do
      campground_1 = create(:campground_1)
      get "/api/v1/campgrounds/#{campground_1.id}"
      
      returned_response = JSON.parse(response.body)
      
      expect(response.status).to eq 200
      expect(response.content_type).to eq 'application/json; charset=utf-8'
      
      expect(returned_response['name']).to eq campground_1.name
      expect(returned_response['review']).to eq campground_1.review
      expect(returned_response['location']).to eq campground_1.location
      expect(returned_response['zip_code']).to eq campground_1.zip_code
      expect(returned_response['dogs_allowed']).to eq campground_1.dogs_allowed
      expect(returned_response['electric_hookups']).to eq campground_1.electric_hookups
      expect(returned_response['water_hookups']).to eq campground_1.water_hookups
      expect(returned_response['potable_water']).to eq campground_1.potable_water
      expect(returned_response['dump_station']).to eq campground_1.dump_station
      expect(returned_response['bathrooms']).to eq campground_1.bathrooms
      expect(returned_response['showers']).to eq campground_1.showers
      expect(returned_response['image_name']).to eq campground_1.image_name
      expect(returned_response['image_num']).to eq campground_1.image_num
    end

  end


end
