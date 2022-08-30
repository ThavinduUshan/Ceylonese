import React from "react";

const SearchAuctionsSideBar = (props) => {
  const changeType = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    props.set(parseInt(e.target.value));
  };

  return (
    <>
      <aside className="col-span-1 " aria-label="Sidebar">
        <div className="overflow-y-auto py-4 px-3 bg-gray-50 dark:bg-gray-800 sticky top-0 left-0 h-screen">
          <ul className="space-y-2 ">
            <li className="mb-5">
              <span className="ml-3 flex flex-wrap items-center p-2 pt-5 text-base font-normal text-gray-900 dark:text-white">
                Item Type
              </span>
              <div className="ml-3 flex flex-wrap items-center p-2 text-base font-normal text-gray-900 dark:text-white pt-4 mt-4 space-y-2 border-t border-gray-200 dark:border-gray-700">
                <div className="mt-2">
                  <div>
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        className="form-radio2"
                        name="radio"
                        value={0}
                        onChange={changeType}
                      />
                      <span className="ml-2">Fixed Price</span>
                    </label>
                  </div>
                  <div className="mt-2">
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        className="form-radio3"
                        name="radio"
                        checked
                        value={1}
                        onChange={changeType}
                      />
                      <span className="ml-2">Auctions</span>
                    </label>
                  </div>
                </div>
              </div>
            </li>

            <li>
              <span className="ml-3 flex flex-wrap items-center p-2 text-base font-normal text-gray-900 dark:text-white">
                Price
              </span>
              <span className="ml-3 flex flex-wrap items-center p-2 text-base font-normal text-gray-900 dark:text-white pt-4 mt-4 space-y-2 border-t border-gray-200 dark:border-gray-700">
                <span className="flex flex-wrap items-center p-2 text-base font-normal text-gray-900 dark:text-white">
                  <input
                    type="text"
                    id="minprice"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-20 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                    placeholder="Min"
                  />
                </span>
                <span className="flex flex-wrap items-center p-2 text-base font-normal text-gray-900 dark:text-white">
                  -
                </span>
                <span className="flex flex-wrap items-center p-2 text-base font-normal text-gray-900 dark:text-white">
                  <input
                    type="text"
                    id="maxprice"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-20 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                    placeholder="Max"
                  />
                </span>
              </span>
            </li>

            <li>
              <span className="ml-3 flex flex-wrap items-center p-2 pt-5 text-base font-normal text-gray-900 dark:text-white">
                Ship To
              </span>
              <div className="ml-3 flex flex-wrap items-center p-2 text-base font-normal text-gray-900 dark:text-white pt-4 mt-4 space-y-2 border-t border-gray-200 dark:border-gray-700">
                <div className="mt-2">
                  <div>
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        className="form-radio4"
                        name="radio"
                      />
                      <span className="ml-2">Worldwide</span>
                    </label>
                  </div>
                  <div>
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        className="form-radio5"
                        name="radio"
                        value="2"
                      />
                      <span className="ml-2">Sri Lanka</span>
                    </label>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
};

export default SearchAuctionsSideBar;
