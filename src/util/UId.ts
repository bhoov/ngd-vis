let the_unique_id_counter = 0;

export class UId {
    static simpleUId({prefix = ''}): string {
        the_unique_id_counter += 1;

        return prefix + the_unique_id_counter;
    }
}
