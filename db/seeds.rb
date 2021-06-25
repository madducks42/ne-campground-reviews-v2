# Seed Data

User.destroy_all
Post.destroy_all

user_1 =
  User.create(
    first_name: 'Maddox',
    last_name: 'Grey',
    email: 'maddoxgrey42+admin@gmail.com',
    password: 'password',
    role: 'admin'
  )

post_1 =
  Post.create(
    title: 'Post Article 1',
    image: 'https://maddox-grey-author.s3.amazonaws.com/forest-path.jpg',
    body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industries standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    keywords: '#writing',
    user: user_1
  )
  
  post_2 =
  Post.create(
    title: 'Post Article 2',
    image: 'https://maddox-grey-author.s3.amazonaws.com/forest-path.jpg',
    body: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).',
    keywords: '#art',
    user: user_1
  )