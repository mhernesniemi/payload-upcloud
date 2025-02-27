import { ContactsBlock as ContactsBlockType } from "@/payload-types";
import Image from "next/image";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline";
import Heading from "./Heading";
type Props = {
  block: ContactsBlockType;
};

export function ContactsBlock({ block }: Props) {
  return (
    <div className="my-24">
      {block.blockName && (
        <Heading level="h2" size="md" className="mb-6">
          {block.blockName}
        </Heading>
      )}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {block.contacts?.map(
          (contact) =>
            typeof contact === "object" && (
              <div key={contact.id} className="relative rounded-xl bg-stone-800 p-6">
                {typeof contact.image === "object" && contact.image?.url && (
                  <div className="mb-4 overflow-hidden">
                    <Image
                      src={contact.image.url}
                      alt={contact.image.alt || ""}
                      width={contact.image.width || 400}
                      height={contact.image.height || 400}
                      className="h-48 w-full object-cover"
                    />
                  </div>
                )}
                <Heading level="h3" size="sm" className="mb-3 text-stone-400">
                  {contact.name}
                </Heading>
                {contact.title && (
                  <p className="mb-3 text-sm font-medium text-stone-400">{contact.title}</p>
                )}
                <div className="space-y-2">
                  <p className="flex items-center text-stone-300">
                    <EnvelopeIcon className="mr-2 h-4 w-4" />
                    <a href={`mailto:${contact.email}`} className="text-stone-300">
                      {contact.email}
                    </a>
                  </p>
                  {contact.phone && (
                    <p className="flex items-center text-stone-300">
                      <PhoneIcon className="mr-2 h-4 w-4" />
                      <a href={`tel:${contact.phone}`} className="text-stone-300">
                        {contact.phone}
                      </a>
                    </p>
                  )}
                </div>
                {contact.categories && contact.categories.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {contact.categories.map(
                      (category) =>
                        typeof category === "object" && (
                          <span
                            key={category.id}
                            className="rounded-full bg-stone-800 px-3 py-1 text-xs font-medium text-stone-300"
                          >
                            {category.label}
                          </span>
                        ),
                    )}
                  </div>
                )}
              </div>
            ),
        )}
      </div>
    </div>
  );
}
