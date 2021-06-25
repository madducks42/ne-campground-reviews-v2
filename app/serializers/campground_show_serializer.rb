class CampgroundShowSerializer < ActiveModel::Serializer
  attributes  :id, 
              :name, 
              :review,
              :caption, 
              :location,
              :zip_code,
              :campground_link,
              :dogs_allowed, 
              :electric_hookups, 
              :water_hookups, 
              :potable_water, 
              :dump_station, 
              :bathrooms, 
              :showers, 
              :userSignedIn, 
              :userIsAdmin

  def userSignedIn
    if !current_user
      return false
    else
      return true
    end
  end

  def userIsAdmin
    if current_user.nil?
      false
    else
      current_user.role == "admin"
    end
  end
  
end