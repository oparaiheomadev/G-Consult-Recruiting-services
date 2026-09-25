export default function AvatarIllustration({ variant = 'male', className }) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      role="img"
      aria-hidden="true"
    >
      {/* Background */}
      <circle cx="50" cy="50" r="50" className="fill-accent" />

      <g clipPath="url(#avatarClip)">
        {/* Shoulders */}
        <path
          d="M50 62c-16 0-29 11-31 26 0 0 0 12 0 12h62s0-12 0-12c-2-15-15-26-31-26Z"
          className="fill-primary"
        />

        {/* Collar */}
        <path d="M42 63l8 9 8-9-8-4-8 4Z" className="fill-background" />

        {/* Neck */}
        <rect
          x="44"
          y="52"
          width="12"
          height="12"
          rx="3"
          className="fill-background"
        />

        {/* Head */}
        <ellipse cx="50" cy="40" rx="17" ry="19" className="fill-background" />

        {/* Hair */}
        {variant === 'female' ? (
          <path
            d="M50 18c-12 0-20 9-20 21 0 10 1 18 3 24l4-2c-2-6-2-13-2-20 6 2 12-1 15-5 3 5 9 8 15 7 0 6 0 12-2 18l4 2c2-6 3-14 3-24 0-12-8-21-20-21Z"
            className="fill-foreground"
          />
        ) : (
          <path
            d="M50 19c-11 0-19 7-19 17 0 2 0 4 1 6 1-5 3-8 6-10 4 3 10 4 15 3 4-1 8 1 10 4 1 1 2 3 2 5 1-3 2-6 2-9 0-10-7-16-17-16Z"
            className="fill-foreground"
          />
        )}
      </g>

      <defs>
        <clipPath id="avatarClip">
          <circle cx="50" cy="50" r="50" />
        </clipPath>
      </defs>
    </svg>
  );
}
