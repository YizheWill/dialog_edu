class AddNullFalseToColumns < ActiveRecord::Migration[6.0]
  def change
    change_column_null :articles, :title, false
    change_column_null :articles, :body, false
    change_column_null :comments, :content, false
  end
end
