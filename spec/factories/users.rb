require 'faker'

FactoryBot.define do
  # user_1 - admin
  factory :user_1, class: User do
    first_name { "Kylo" } 
    last_name { "Ren " }
    email { Faker::Internet.safe_email }
    password { "Password@1" }
    password_confirmation { "Password@1" }
    role { "admin" }
  end

end