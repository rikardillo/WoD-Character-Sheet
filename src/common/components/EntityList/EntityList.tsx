import { useState, Fragment } from "react";

import { Button } from "@/common/components";
import RemovalPrompt from "@/common/components/EntityList/RemovalPrompt";

export type EntityListProps<T> = {
  fieldIdentifier: string;
  renderRow: (gameFieldId: string, row: T, column: string) => JSX.Element;
  columns: string[];
  rows: T[];
  onCreate: (referenceId: string) => void;
  onDelete: (fieldId: string) => void;
  title: string;
  titlePlural: string;
  hideTitles?: boolean;
};

export const EntityList = <T extends { id: string; value: any }>({
  fieldIdentifier,
  renderRow,
  columns,
  rows,
  onCreate,
  onDelete,
  title,
  titlePlural,
  hideTitles,
}: EntityListProps<T>) => {
  const [removalId, setRemovalId] = useState<string | null>(null);
  const handleAddEquipment = () => {
    onCreate(crypto.randomUUID());
  };
  return (
    <>
      <h4>{titlePlural}</h4>
      {!hideTitles && (
        <div className="w-full flex justify-between items-stretch">
          {columns.map((column) => (
            <div
              key={`${fieldIdentifier}-${column}`}
              id={`${fieldIdentifier}-${column}`}
              className="text-center w-full text-[0.4rem] font-light uppercase"
            >
              {column}
            </div>
          ))}
          <div className="text-center w-[8rem] text-[0.4rem] p-2"></div>
        </div>
      )}
      {rows.map((entry, index) => (
        <div
          key={`${fieldIdentifier}-${entry.id}`}
          className="relative w-full flex justify-between items-stretch h-full"
        >
          {removalId === entry.id && (
            <div className="absolute bg-black/80 top-0 bottom-0 w-full border border-[rgba(255, 255, 255, 0.1)] rounded-[6px] flex  items-center justify-center">
              <RemovalPrompt
                removeFunction={() => {
                  const fieldId = `${fieldIdentifier}-${entry.value.referenceId}`;
                  onDelete(fieldId);
                }}
                id={entry.id}
                entry={`equipment`}
                setRemovalId={setRemovalId}
              />
            </div>
          )}
          {columns.map((column) => (
            <Fragment key={`${fieldIdentifier}-${entry.id}-${column}`}>
              {renderRow(fieldIdentifier, entry, column)}
            </Fragment>
          ))}
          <div className="w-[2rem] h-full">
            <div
              className="flex text-center justify-center p-2 pr-4 cursor-pointer h-0"
              onClick={() => setRemovalId(entry.id)}
              title="Remove element"
            >
              x
            </div>
          </div>
        </div>
      ))}
      <Button onClick={handleAddEquipment} text={`+ Add ${title}`} />
    </>
  );
};

export default EntityList;
