class CreateComments < ActiveRecord::Migration[5.2]
  def change
    create_table :comments do |t|
      t.references :blog, null: false, foreign_key: { to_table: :blogs }
      t.string :comment, null: false
      t.string :nickname, null: false
      t.timestamps
    end
  end
end
