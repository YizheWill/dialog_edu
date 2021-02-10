

require 'rails_helper'

feature 'article creating process' do

  scenario 'have a new artcle page' do
    visit new_article_url
    expect(page).to have_content 'New article'
  end

  feature 'creating a aricle' do
    before(:each) do
      visit new_article_url
      fill_in 'title', with: 'testing_title'
      fill_in 'body', with: 'biscuits are not good'
      click_on 'Create Article'
    end

    scenario 'redirects to article index page after creating' do
      expect(page).to have_content 'Aritcle Index Page'
    end

  end
end



feature 'article updating process' do

  scenario 'update an artcle page' do
    visit new_article_url
    expect(page).to have_content 'Update article'
  end

  feature 'update a aricle' do
    before(:each) do
      visit new_article_url
      fill_in 'title', with: 'updating_title'
      fill_in 'body', with: 'biscuits are good and tasty'
      click_on 'Update Article'
    end

    scenario 'redirects to article index page after updating' do
      expect(page).to have_content 'Aritcle Index Page'
    end

  end
end

feature 'article updating process' do

  scenario 'update an artcle page' do
    visit new_article_url
    expect(page).to have_content 'Update article'
  end

  feature 'update a aricle' do
    before(:each) do
      visit new_article_url
      fill_in 'title', with: 'updating_title'
      fill_in 'body', with: 'biscuits are good and tasty'
      click_on 'Update Article'
    end

    scenario 'redirects to article index page after updating' do
      expect(page).to have_content 'Aritcle Index Page'
    end

  end
end