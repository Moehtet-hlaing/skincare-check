import React from 'react'
import { CiWarning } from "react-icons/ci";
import { CiAvocado } from "react-icons/ci";
import { LuMessageCircleHeart } from "react-icons/lu";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

const About = () => {
  return (
      <div className="bg-white py-8 sm:py-24" id="about">
  <div className="mx-auto max-w-7xl px-6 lg:px-8">
    <div className="mx-auto max-w-2xl lg:text-center">
      <h2 className="text-base/7 font-semibold text-green-700">Smarter Skincare Starts Here</h2>
      <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl lg:text-balance">
        Everything you need to build a safe and effective skincare routine
      </p>
      <p className="mt-6 text-lg/8 text-gray-600">
        Easily check if products can be used together, understand ingredients, and protect your skin from harmful interactions.
      </p>
    </div>

    <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
      <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">

        <div className="relative pl-16">
          <dt className="text-base/7 font-semibold text-gray-900">
            <div className="absolute top-0 left-0 flex size-10 items-center justify-center rounded-sm bg-green-700">
              <IoMdCheckmarkCircleOutline className="size-6 text-white" />
            </div>
            Product Compatibility
          </dt>
          <dd className="mt-2 text-base/7 text-gray-600">
            Quickly check if two skincare products can be safely used together without causing irritation or reducing effectiveness.
          </dd>
        </div>

        <div className="relative pl-16">
          <dt className="text-base/7 font-semibold text-gray-900">
            <div className="absolute top-0 left-0 flex size-10 items-center justify-center rounded-sm bg-green-700">
              <CiAvocado className="size-6 text-white"/>
            </div>
            Ingredient Insights
          </dt>
          <dd className="mt-2 text-base/7 text-gray-600">
            Learn about key ingredients, their benefits, and what skin concerns they target — all explained simply.
          </dd>
        </div>

        <div className="relative pl-16">
          <dt className="text-base/7 font-semibold text-gray-900">
            <div className="absolute top-0 left-0 flex size-10 items-center justify-center rounded-sm bg-green-700">
              <CiWarning className="size-6 text-white" />
            </div>
            Reaction Warnings
          </dt>
          <dd className="mt-2 text-base/7 text-gray-600">
            Get alerts if your combination may lead to dryness, breakouts, or other unwanted reactions — before you apply.
          </dd>
        </div>

        <div className="relative pl-16">
          <dt className="text-base/7 font-semibold text-gray-900">
            <div className="absolute top-0 left-0 flex size-10 items-center justify-center rounded-sm bg-green-700">
              <LuMessageCircleHeart className="size-6 text-white" />
            </div>
            Personalized Suggestions
          </dt>
          <dd className="mt-2 text-base/7 text-gray-600">
            Coming soon: Get product pairings tailored to your skin type, routine goals, and sensitivity level.
          </dd>
        </div>

      </dl>
    </div>
  </div>
</div>
  )
}

export default About