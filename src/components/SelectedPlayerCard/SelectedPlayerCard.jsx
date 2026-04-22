import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

const SelectedPlayerCard = ({ player, onDelete }) => {
  const { player_name, player_image, country_flag, role } = player;

  return (
    <div className="flex shadow justify-between items-center border border-[#1313131a] p-2 rounded-2xl">
      <div className="flex items-center gap-4 w-fit">
        <img
          className="w-18 h-18 object-cover rounded-lg"
          src={player_image}
          alt="Player's image"
        />
        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-xl -mt-2">{player_name}</h3>
          <div className="flex items-center gap-3">
            <img src={country_flag} alt="Country Flag" />
            <p>{role}</p>
          </div>
        </div>
      </div>
      <button
        className="p-3 text-red-500 font-bold text-xl cursor-pointer"
        onClick={() => onDelete(player)}
      >
        <FontAwesomeIcon icon={faTrashCan} />
      </button>
    </div>
  );
};

export default SelectedPlayerCard;
