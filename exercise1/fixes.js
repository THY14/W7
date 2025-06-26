// FIX 1
User.hasOne(Profile);
Profile.belongsTo(User); 
await sequelize.sync();
const profile = await Profile.create({ bio: 'Test' });
const user = await profile.createUser({ username: 'joe' });

// FIX 2
Author.hasMany(Book); 
Book.belongsTo(Author);
await sequelize.sync();
const author = await Author.create({ name: 'Samnang' });
const book = await author.createBook({ title: 'Correct Way' });

// FIX 3
User.hasOne(Profile);
Profile.belongsTo(User);
await sequelize.sync();
const user = await User.create({ username: 'Jon' });
const profile = await Profile.create({ bio: 'hello' });
await user.setProfile(profile); 

// FIX 4
Employee.belongsTo(Manager); 
