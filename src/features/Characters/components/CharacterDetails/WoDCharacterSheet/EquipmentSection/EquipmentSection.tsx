import { useMemo } from "react";

import { InputText } from "@/common/components";
import { type SectionProps } from "@/features/Characters/components/CharacterDetails";

import { EntityContainer } from "@/common/components/EntityList/EntityList.styled";
import { EntityList } from "@/common/components/EntityList";
import { CharacterSheetFieldValue } from "@/features/Characters";

export const EquipmentSection = ({
  fieldValues = {},
  onUpdateField = async () => {},
  onRemoveField = async () => {},
}: Omit<SectionProps, "fields">) => {
  const equipmentList = useMemo(
    () =>
      Object.keys(fieldValues)
        .filter((key) => key.startsWith("wod-equipment"))
        .map((key) => fieldValues[key]),
    [fieldValues]
  );

  const handleOnCreate = (id: string, fieldValueId?: string) => {
    return onUpdateField(
      { referenceId: id },
      `wod-equipment-${id}`,
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
          rows={equipmentList}
          renderRow={(gameFieldId, row, column) => {
            const fieldId = `${gameFieldId}-${row.value?.referenceId}`;
            const fieldValue = fieldValues[fieldId] ?? { value: {} };
            return (
              <div className="w-full p-2 flex">
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
              </div>
            );
          }}
          title="Equipment"
          titlePlural="Equipments"
          fieldIdentifier="wod-equipment"
          columns={["Equipment", "Durability", "Structure", "Size", "Cost"]}
          onCreate={handleOnCreate}
          onDelete={handleOnDelete}
        />
      </EntityContainer>
    </>
  );
};

export default EquipmentSection;
