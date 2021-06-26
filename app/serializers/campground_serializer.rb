class CampgroundSerializer < ActiveModel::Serializer

  attributes  :id, 
              :name, 
              :caption,
              :location,
              :userIsAdmin

  def userIsAdmin
    if current_user.nil?
      return false
    else
      current_user.role == "admin"
      return true
    end
  end
end
