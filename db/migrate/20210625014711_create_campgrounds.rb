class CreateCampgrounds < ActiveRecord::Migration[6.1]
  def change
    create_table :campgrounds do |t|
      t.string :name,               null: false
      t.string :caption,            null: false, default: "enter caption info"
      t.string :review,             null: false
      t.string :location,           null: false
      t.string :campground_link,    null: false
      t.string :zip_code,           null: false
      t.boolean :dogs_allowed,      null: false, default: false
      t.boolean :electric_hookups,  null: false, default: false
      t.boolean :water_hookups,     null: false, default: false
      t.boolean :potable_water,     null: false, default: false
      t.boolean :dump_station,      null: false, default: false
      t.boolean :bathrooms,         null: false, default: false
      t.boolean :showers,           null: false, default: false

      t.timestamps
    end
  end
end