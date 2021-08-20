require 'rails_helper'

feature 'user signs in', %Q{
  As an admin user
  I want to sign in
  on the admin login portal
} do

  scenario 'user attempts to sign in with correct credentials' do
    user = FactoryBot.create(:user_1)
    visit new_user_session_path
    fill_in 'Email', with: user.email
    fill_in 'Password', with: user.password
    click_button 'Log in'
    expect(page).to have_content('Signed in successfully')
  end

  scenario 'user attempts to sign in with incorrect credentials' do
    user = FactoryBot.create(:user_1)
    visit new_user_session_path
    fill_in 'Email', with: user.email
    fill_in 'Password', with: "wrongpass"
    click_button 'Log in'
    expect(page).to have_content('Invalid Email or password')
  end
end
