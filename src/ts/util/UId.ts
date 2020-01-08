let the_unique_id_counter = 0;
let the_unique_string_counter = 0;

export class UId {
    static uid(): number {
        the_unique_id_counter += 1;
        return the_unique_id_counter
    }
    static simpleUId(prefix=''): string {
        the_unique_string_counter += 1;

        return prefix + the_unique_string_counter;
    }
}
