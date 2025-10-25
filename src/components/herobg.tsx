// components/Herobg.tsx
export default function Herobg() {
  return (
    <div className="absolute inset-0 -z-10">
      <div
        className="h-full w-full bg-cover bg-center"
        style={{
          backgroundImage: "url(/assets/herobackground.jpg)",
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
      </div>
    </div>
  );
}
