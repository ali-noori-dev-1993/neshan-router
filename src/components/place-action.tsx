export interface PlaceActionProps {
  iconName: string;
  title: string;
}

export default function PlaceAction({ iconName, title }: PlaceActionProps) {
  return (
    <button className="p-[6px_12px_6px_16px] bg-white hover:bg-gray-100 border border-[#e3e3e8] rounded-[50px] flex gap-1 transition-colors">
      <img width={20} height={20} src={`../../icons/${iconName}`} alt={title} />

      <span className="text-primary text-xs font-semibold leading-5">
        {title}
      </span>
    </button>
  );
}
