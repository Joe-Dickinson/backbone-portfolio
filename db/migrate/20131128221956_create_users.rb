class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :first_name
      t.string :last_name
      t.string :bio
      t.string :mission

      t.timestamps
    end
  end
end
