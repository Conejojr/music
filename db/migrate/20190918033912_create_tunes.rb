class CreateTunes < ActiveRecord::Migration[5.2]
  def change
    create_table :tunes do |t|
      t.text :img_url
      t.string :music_title
      t.string :artist_name
      t.timestamps
    end
  end
end
