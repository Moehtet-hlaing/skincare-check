import React from 'react'

const Stat = () => {
 const stats = [
    { id: 1, name: 'Ingredients analyzed', value: '5,000+' },
    { id: 2, name: 'Compatibility checks', value: '10,000+' },
    { id: 3, name: 'Products in database', value: '1,200+' },
  ];
  return (
    <div className="bg-neutral-100 py-4 sm:py-5 ">
      <div className="mx-auto max-w-7xl px-6 lg:px-4">
        <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4">
              <dt className="text-base/7 text-gray-600">{stat.name}</dt>
              <dd className="order-first text-xl font-semibold tracking-tight text-gray-900 sm:text-3xl">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
};

export default Stat;
