import consultingIllustration from '../assets/sales-intervention-image.webp'

function ConsultingIllustration({ className = '' }) {
  return (
    <div className={`scene-card scene-image-card ${className}`.trim()}>
      <img
        className="scene-image"
        src={consultingIllustration}
        alt="Consulting team illustration"
      />
    </div>
  )
}

export default ConsultingIllustration
