require 'rails_helper'

feature 'user updates password', %Q{
  As an authenticated user
  I want to be able to update
  my password
} do

  scenario 'user attempts to update password with correct password' do
    user = FactoryBot.create(:user_1)
    visit new_user_session_path
    fill_in 'Email', with: user.email
    fill_in 'Password', with: user.password
    click_button 'Log in'
    
    click_link 'Admin Profile'
    expect(page).to have_content('Update Email or Password')
    fill_in 'Password', with: 'password123'
    fill_in 'Password confirmation', with: 'password123'
    fill_in 'Current password', with: user.password
    click_button 'Update'

    expect(page).to have_content('Your account has been updated successfully.')

  end

  scenario 'user attempts to update email without inputting password' do
    user = FactoryBot.create(:user_1)
    visit new_user_session_path
    fill_in 'Email', with: user.email
    fill_in 'Password', with: user.password
    click_button 'Log in'
    
    click_link 'Admin Profile'
    expect(page).to have_content('Update Email or Password')
    fill_in 'Password', with: 'password123'
    fill_in 'Password confirmation', with: 'password123'
    fill_in 'Current password', with: ''
    click_button 'Update'

    expect(page).to have_content("Current password can't be blank")

  end

  scenario 'user attempts to update email with incorrect password' do
    user = FactoryBot.create(:user_1)
    visit new_user_session_path
    fill_in 'Email', with: user.email
    fill_in 'Password', with: user.password
    click_button 'Log in'
    
    click_link 'Admin Profile'
    expect(page).to have_content('Update Email or Password')
    fill_in 'Password', with: 'password123'
    fill_in 'Password confirmation', with: 'password123'
    fill_in 'Current password', with: 'wrongpassword'
    click_button 'Update'

    expect(page).to have_content("Current password is invalid")

  end

end
