# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
  @bs = Faker::Company.bs
  @catch_phrase = Faker::Company.catch_phrase
  User.create!(:first_name => "Joe", :last_name => "Dickinson", :bio => "#{@catch_phrase} expert", :mission => "To #{@bs}")
