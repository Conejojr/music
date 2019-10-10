class CreateBlogs < ActiveRecord::Migration[5.2]
  def change
    create_table :blogs do |t|
      t.text :video_url
      t.string :title
      t.text :text
      t.timestamps
    end
  end
end
