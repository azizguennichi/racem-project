import React from 'react';
import './cardUser.css';
import addUser from '../../images/add.png';
import updateUser from '../../images/update.png';
import deleteUser from '../../images/delete.png';
import { Link } from 'react-router-dom'; // Import Link from React Router if you're using it

const CardUser = () => {
  const cardData = [
    {
      title: 'Ajouter un utilisateur',
      description: 'Ajouter un utilisateur',
      image: addUser,
      link: '/adduser', // Specify the URL you want to link to for Add User
    },
    {
      title: 'Modifier/Supprimer un utilisateur',
      description: 'Modifier/Supprimer un utilisateur',
      image: updateUser,
      link: '/tableuser', // Specify the URL you want to link to for Update User
    },
   /*  {
      title: 'Delete User',
      description: 'Delete User',
      image: deleteUser,
      link: '/deleteuser', // Specify the URL you want to link to for Delete User
    }, */
    // Add more card data objects as needed
  ];

  return (
    <div className='Container'>
    <div className="main">
      {cardData.map((card, index) => (
        <Link to={card.link} key={index} className="card-link">
          <div className="card" style={{ backgroundImage: `url(${card.image})` }}>
            <div className="card_content">
              <div className="card_title">{card.title}</div>
             {/*  <div className="card_desc">{card.description}</div> */}
            </div>
            <div className="card_bottom_shadow"></div>
          </div>
        </Link>
      ))}
    </div></div>
  );
}

export default CardUser;
