class CreateVegetables < ActiveRecord::Migration[5.1]
  def change
    create_table :vegetables do |t|
      t.string :name, null: false

      t.timestamps
    end
  end
end
