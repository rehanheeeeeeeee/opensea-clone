import React from "react";
import { Disclosure } from "@headlessui/react";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

const styles = {
  btn: `flex flex-row items-center justify-between p-3`,
  dropdown: "p-4 text-white flex items-center justify-between bg-[#3C4048]",
};

export default function Dropdown({ title, Icon, dropdownData }) {
  return (
    <Disclosure>
      {({ open }) => (
        <>
          <Disclosure.Button>
            <div className={styles.btn}>
              <div className="flex flex-row items-center space-x-2">
                {Icon}
                <p className="font-semibold text-md">{title}</p>
              </div>
              {open ? <IoIosArrowDown /> : <IoIosArrowUp />}
            </div>
          </Disclosure.Button>
          <Disclosure.Panel>
            <p>
              {typeof dropdownData === "string" ? (
                <div className={styles.dropdown}>
                  <p>{dropdownData}</p>
                </div>
              ) : (
                <div className="divide-y divide-black">
                  {dropdownData?.map((data, index) => (
                    <div key={index} className={styles.dropdown}>
                      <p>{data.trait_type}</p>
                      <p>{data.value}</p>
                    </div>
                  ))}
                </div>
              )}
            </p>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
