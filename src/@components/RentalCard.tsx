import { FC } from "react";
import {
  FiAward,
  FiHeart,
  FiHome,
  FiMapPin,
  FiStar,
  FiWifi,
} from "react-icons/fi";
import { IRental } from "../@interfaces";
import { useRentalRating } from "../helpers";
import { Badge } from "./Badge";
import { Button } from "./Button";
import { Typography } from "./Typography";

export interface IRentalCardProps {
  rental: IRental;
}

/**
 * Component to render the image of the card with a badge on the left bottom corner.
 */
const RentalCardImage: FC<
  Pick<IRentalCardProps["rental"], "badge" | "image" | "title">
> = ({ badge, image, title }) => {
  return (
    <div className="relative w-full md:w-52 h-36">
      <img
        src={image}
        className="object-cover w-full rounded-t-lg md:rounded-lg md:w-52 h-36"
        alt={title}
      />
      {badge && (
        <Badge
          className="absolute bottom-2 left-2"
          variant="primary"
          size="md"
          LeadingIcon={<FiAward />}
        >
          {badge}
        </Badge>
      )}
    </div>
  );
};

/**
 * Header component to render the title with subtitle and favourite icon.
 */
const Header: FC<Pick<IRentalCardProps["rental"], "subtitle" | "title">> = ({
  subtitle,
  title,
}) => {
  return (
    <div className="flex items-center justify-between">
      <div>
        <Typography
          variant="sm"
          customWeight="bold"
          customColour="text-primary-600 dark:text-primary-300"
          className="mt-3 mb-1 md:mt-0"
        >
          {title}
        </Typography>
        <Typography
          variant="md"
          customWeight="semibold"
          customColour="text-gray-900 dark:text-white"
          className="mb-1"
        >
          {subtitle}
        </Typography>
      </div>
      <Button
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        onClick={() => {}}
        variant="secondary"
        IconOnly={<FiHeart />}
        className="absolute md:static right-2 top-24"
      />
    </div>
  );
};

/**
 * Component for the rating and reviews of the card.
 */
const RatingReviews: FC<
  Pick<IRentalCardProps["rental"], "rating" | "reviews">
> = ({ rating, reviews }) => {
  const { arrayStarsFilled, arrayStarsRemaining } = useRentalRating(rating);

  return (
    <div className="flex mt-5 mb-5">
      <div className="flex items-center space-x-1">
        {arrayStarsFilled.map((index: number) => (
          <FiStar
            key={index}
            size={20}
            fill="#FDB022"
            className="text-warning-400"
          />
        ))}
        {arrayStarsRemaining.map((index: number) => (
          <FiStar
            key={index}
            size={20}
            fill="#E4E7EC"
            className="text-gray-200"
          />
        ))}
      </div>
      <Typography variant="md" customWeight="bold" className="mx-2 select-none">
        {rating}
      </Typography>
      <Typography variant="md" customColour="text-gray-500 dark:text-gray-400">
        {reviews} reviews
      </Typography>
    </div>
  );
};

/**
 * Component to render the loaction regarding the address.
 */
const Location: FC<Pick<IRentalCardProps["rental"], "address">> = ({
  address,
}) => {
  return (
    <div className="flex items-center">
      <FiMapPin size={20} className="text-gray-500 dark:text-white" />
      <Typography
        variant="md"
        customWeight="bold"
        customColour="text-gray-500 dark:text-gray-300"
        className="ml-2 mr-2 sm:mr-5"
      >
        {address}
      </Typography>
    </div>
  );
};

/**
 * Component to visualisate the count of beds to rental.
 */
const Bed: FC<Pick<IRentalCardProps["rental"], "bed">> = ({ bed }) => {
  return (
    <div className="items-center hidden sm:flex">
      <FiHome size={20} className="text-gray-500 dark:text-white" />
      <Typography
        variant="md"
        customWeight="bold"
        customColour="text-gray-500 dark:text-gray-300"
        className="ml-2 mr-2 sm:mr-5"
      >
        {bed}
      </Typography>
    </div>
  );
};

/**
 * Component to render the wifi symbol with title.
 */
const Wifi: FC<Pick<IRentalCardProps["rental"], "wifi">> = ({ wifi }) => {
  return (
    <div className="flex items-center">
      <FiWifi size={20} className="text-gray-500 dark:text-white" />
      <Typography
        variant="md"
        customWeight="bold"
        customColour="text-gray-500 dark:text-gray-300"
        className="ml-2 mr-2 sm:mr-5"
      >
        {wifi}
      </Typography>
    </div>
  );
};

/**
 * Component to show the pricing of the rentail card with the currency.
 */
const Pricing: FC<Pick<IRentalCardProps["rental"], "currency" | "price">> = ({
  currency,
  price,
}) => {
  return (
    <div className="items-center hidden space-x-3 md:flex">
      <Typography variant="lg" customWeight="bold" className="">
        {price}
      </Typography>
      <Typography variant="md" customColour="text-gray-500 dark:text-white">
        {currency} total
      </Typography>
    </div>
  );
};

/**
 * Component to show the pricing of the rentail card with the currency for a small view.
 */
const PricingSm: FC<Pick<IRentalCardProps["rental"], "currency" | "price">> = ({
  currency,
  price,
}) => {
  return (
    <div className="flex items-center px-5 pt-2 space-x-3 md:pr-0 md:hidden">
      <Typography variant="lg" customWeight="bold">
        {price}
      </Typography>
      <Typography variant="md" customColour="text-gray-500 dark:text-white">
        {currency} total
      </Typography>
    </div>
  );
};

/**
 * Component to render a responsive rental card.
 */
export const RentalCard: FC<IRentalCardProps> = ({
  rental: {
    address,
    bed,
    currency,
    image,
    price,
    rating,
    reviews,
    subtitle,
    title,
    wifi,
    badge,
  },
}) => (
  <div className="relative flex flex-col bg-white rounded-lg shadow-md md:p-5 md:flex-row dark:bg-gray-800">
    <RentalCardImage image={image} title={title} badge={badge} />
    <PricingSm currency={currency} price={price} />

    <div className="flex flex-col flex-grow px-5 md:pr-0">
      <Header subtitle={subtitle} title={title} />
      <RatingReviews rating={rating} reviews={reviews} />

      <div className="flex items-center justify-between mb-3 md:mb-0">
        <div className="flex items-center justify-between w-full md:w-auto">
          <Location address={address} />
          <Bed bed={bed} />
          <Wifi wifi={wifi} />
        </div>
        <Pricing currency={currency} price={price} />
      </div>
    </div>
  </div>
);
