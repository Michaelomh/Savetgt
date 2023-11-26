function HowItWorksImage({ random }: { random: number }) {
  return (
    <div className="w-full">
      <img
        src={`splash/hiw-step-${random}.png`}
        alt="How it works first step - Tailor your experience"
        className="px-16"
      />
    </div>
  )
}

export default HowItWorksImage
