class ModSerializer < ActiveModel::Serializer

  attributes  :id, 
              :title, 
              :body,
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
