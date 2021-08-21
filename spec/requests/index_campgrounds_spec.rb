require 'rails_helper'
require 'pry'

RSpec.describe "Campgrounds", type: :request do

  describe "GET /campgrounds" do
    it "gets all campgrounds in DB" do
      get api_v1_campgrounds_path
      expect(response).to have_http_status(200)
    end

    it 'should return the campground names, descriptions, locations and amentities from the database' do
      campground_1 = create(:campground_1)
      campground_2 = create(:campground_2)
      
      get api_v1_campgrounds_path

      returned_response = JSON.parse(response.body)
      expect(returned_response.length).to eq 2
      
      expect(returned_response[0]['name']).to eq campground_1.name
      expect(returned_response[0]['caption']).to eq campground_1.caption
      expect(returned_response[0]['location']).to eq campground_1.location
      expect(returned_response[1]['name']).to eq campground_2.name
      expect(returned_response[1]['caption']).to eq campground_2.caption
      expect(returned_response[1]['location']).to eq campground_2.location
    end

  end

end
