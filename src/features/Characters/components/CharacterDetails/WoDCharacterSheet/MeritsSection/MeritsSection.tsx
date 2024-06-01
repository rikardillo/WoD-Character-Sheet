import { useMemo } from "react";
import { DotRating, InputText } from "@/common/components";
import { EntityList } from "@/common/components/EntityList";
import { EntityContainer } from "@/common/components/EntityList/EntityList.styled";
import { CharacterSheetFieldValue } from "@/features/Characters";
import { SectionProps } from "../../CharacterDetails";

export const MeritsSection = ({
  fieldValues = {},
  onUpdateField = async () => {},
  onRemoveField = async () => {},
}: Omit<SectionProps, "fields">) => {
  const equipmentList = useMemo(
    () =>
      Object.keys(fieldValues)
        .filter((key) => key.startsWith("wod-merit"))
        .map((key) => fieldValues[key]),
    [fieldValues]
  );

  const handleOnCreate = (id: string, fieldValueId?: string) => {
    return onUpdateField(
      { referenceId: id },
      `wod-merit-${id}`,
      fieldValueId,
      true
    );
  };
  const handleOnDelete = (gameFieldId: string) => {
    return onRemoveField(gameFieldId);
  };
  return (
    <>
      <EntityContainer>
        <EntityList<CharacterSheetFieldValue>
          hideTitles
          rows={equipmentList}
          renderRow={(gameFieldId, row, column) => {
            const fieldId = `${gameFieldId}-${row.value?.referenceId}`;
            const fieldValue = fieldValues[fieldId] ?? { value: {} };
            return (
              <div
                className={`w-full p-2 flex items-center justify-center ${
                  (column !== "Merit" && "flex-1") || ""
                }`}
              >
                {column === "Merit" && (
                  <InputText
                    key={`${fieldId}-${fieldValue?.value}-${
                      fieldValue.updatedAt || ""
                    }`}
                    defaultValue={fieldValue.value[column.toLowerCase()]}
                    onChange={(value) => {
                      onUpdateField(
                        {
                          ...fieldValue.value,
                          [column.toLowerCase()]: value,
                        },
                        fieldId,
                        fieldValue.id
                      );
                    }}
                  />
                )}
                {column === "Rating" && (
                  <DotRating
                    key={`${fieldId}-${fieldValue?.value}-${
                      fieldValue.updatedAt || ""
                    }`}
                    id={fieldId}
                    value={fieldValue.value[column.toLowerCase()]}
                    maxRating={5}
                    onChange={(value) => {
                      onUpdateField(
                        {
                          ...fieldValue.value,
                          [column.toLowerCase()]: value,
                        },
                        fieldId,
                        fieldValue.id
                      );
                    }}
                  />
                )}
              </div>
            );
          }}
          title="Merit"
          titlePlural="Merits"
          fieldIdentifier="wod-merit"
          columns={["Merit", "Rating"]}
          onCreate={handleOnCreate}
          onDelete={handleOnDelete}
        />
      </EntityContainer>
    </>
  );
};

export default MeritsSection;
