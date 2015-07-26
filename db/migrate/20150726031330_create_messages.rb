class CreateMessages < ActiveRecord::Migration
  def change
    create_table :messages do |t|

      t.string :name, null: false
      t.string :email, null: false
      t.text :message, null: false
      t.string :nickname

      t.timestamps null: false
    end
  end
end
