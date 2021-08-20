require 'rails_helper'

feature 'user updates email', %Q{
  As an authenticated user
  I want to be able to update
  my email
} do

  scenario 'user attempts to update email with correct password' do
    user = FactoryBot.create(:user_1)
    visit new_user_session_path
    fill_in 'Email', with: user.email
    fill_in 'Password', with: user.password
    click_button 'Log in'
    
    click_link 'Admin Profile'
    expect(page).to have_content('Update Email or Password')
    fill_in 'Email', with: 'maddoxgrey42+test@gmail.com'
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
    fill_in 'Email', with: 'maddoxgrey42+test@gmail.com'
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
    fill_in 'Email', with: 'maddoxgrey42+test@gmail.com'
    fill_in 'Current password', with: 'wrongpassword'
    click_button 'Update'

    expect(page).to have_content("Current password is invalid")

  end

end
