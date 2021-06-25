class Campground < ApplicationRecord
  
  validates :name, presence: true
  validates :caption, presence: true
  validates :review, presence: true
  validates :location, presence: true
  validates :zip_code, presence: true
  validates :image_name, presence: true
  validates :image_num, presence: true
  validates :dogs_allowed, inclusion: { in: [ true, false ] }
  validates :electric_hookups, inclusion: { in: [ true, false ] }
  validates :water_hookups, inclusion: { in: [ true, false ] }
  validates :potable_water, inclusion: { in: [ true, false ] }
  validates :dump_station, inclusion: { in: [ true, false ] }
  validates :bathrooms, inclusion: { in: [ true, false ] }
  validates :showers, inclusion: { in: [ true, false ] }
  
end