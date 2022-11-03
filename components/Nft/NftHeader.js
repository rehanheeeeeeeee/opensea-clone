import React from "react";
import { TfiReload } from "react-icons/tfi";
import { BsBoxArrowInRight, BsShareFill } from "react-icons/bs";
import { FiMoreVertical } from "react-icons/fi";

const styles = {
  border: (border) => `w-10 h-10 ${border && "border-l border-gray-400"} p-2`,
  wrapper: "flex items-center justify-between flex-row w-full space-y-3",
  name: "text-xl text-blue-700 tracking-wider font-semibold",
  hyperLinks:
    "flex items-center justify-around text-gray-400 border border-gray-400 rounded-lg",
};

export default function NftHeader() {
  return (
    <div className={styles.wrapper}>
      <p className={styles.name}>CryptoPunks</p>
      <div className={styles.hyperLinks}>
        <TfiReload className={styles.border(false)} />
        <BsBoxArrowInRight className={styles.border(true)} />
        <BsShareFill className={styles.border(true)} />
        <FiMoreVertical className={styles.border(true)} />
      </div>
    </div>
  );
}
