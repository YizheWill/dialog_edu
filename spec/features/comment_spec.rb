
require 'rails_helper'

feature 'comment feature' do

  scenario 'have a new artcle page' do
    visit new_comment_url
    expect(page).to have_content 'New comment'
  end

  feature 'creating a comment' do
    before(:each) do
      fill_in 'content', with: 'testing comment'
      click_on 'Create Comment'
    end

    scenario 'redirects to home page after creating' do
      expect(page).to have_content 'Home Page'
    end

  end
end